Template.header.helpers({
  activeRouteClass: function(/* route names */) {
    var args = Array.prototype.slice.call(arguments, 0); //convert to array
    args.pop(); // remove hash at end added by Spacebars

    var active = _.any(args, function(name) {
      return Router.current() && Router.current().route.name === name
    });

    return active && 'active';
  }
})