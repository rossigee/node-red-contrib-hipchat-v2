module.exports = function(RED) {
    "use strict";
    var hipchatter = require("hipchatter");

    function HipchatV2Node(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        var notify_error = function(err) {
          if(err != null) node.error(err);
        };

        var hc = new hipchatter(config.apikey, config.apiroot);

        this.on('input', function(msg) {
          hc.notify(config.roomid, msg.payload, notify_error);
        });
    }
    RED.nodes.registerType("hipchat-v2",HipchatV2Node,{});
}
