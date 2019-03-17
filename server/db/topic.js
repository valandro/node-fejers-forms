export class Topic {
    constructor(req,descrp) {
        this.req = req;
        this.descrp = descrp;
    }

    get entity(){
        const entity = {
            topic: {
                id: this.req.body.topic,
                descrp: this.descrp
            },
            descrp: this.req.body.descrp,
            link: this.req.body.link
        };
        return entity;
    }
}