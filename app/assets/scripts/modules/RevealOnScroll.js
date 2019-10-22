import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(items, offset) {
        this.items = document.querySelectorAll(items);
        this.offset = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.items.forEach(item => {
            item.classList.add(`effects--hidden`);
        });
    }

    createWaypoints() {
        this.items.forEach(item => {
            let offset = this.offset;
            new Waypoint({
                element: item,
                handler: () => {
                    item.classList.add(`effects--visible`);
                },
                offset: offset
            })
        });
    }
    // $(item) turn item into a jquery element then we can use .addClass
    
    // createWaypoints() {
    //     this.items.each(function () {
    //         let currentItem = this;
    //         new Waypoint({
    //             element: currentItem,
    //             handler: function () {
    //                 $(currentItem).addClass(`effects--visible`);
    //             },
    //         })
    //     });
    // }
}

export default RevealOnScroll;