
class RouteStacker {
    constructor() {
        this.routes = []; 
    }

    add_route(new_route) {
        this.routes.push(new_route);
        console.log(this.routes);
    }

    get_routes() {
        return this.routes;
    }

    delete_route(start_location) {
        var index = this.find_route_index(start_location);

        this.routes.splice(index, 1);
    }

    find_route_index(start_location) {
        console.log("Find");
        console.log(this.routes);
        for (var i = 0; i < this.routes.length; i++) {
            console.log(this.routes.length);
            if (this.routes[i].get_start_location() === start_location) {
                return i;
            }
        }
    }
}

export default RouteStacker;