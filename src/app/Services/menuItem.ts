export class menuItem {
    id: string;
    name: string;
    description: string;
    price: string;
    gf: boolean;
    gfo: boolean;
    df: boolean;
    dfo: boolean;
    v: boolean;
    vo: boolean
    vg: boolean;
    vgo: boolean;

    constructor(name, description, price, gf, gfo, df, dfo, v, vo, vg, vgo){
        this.id = name;
        this.name = name;
        this.description = description;
        this.price = price;
        this.gf = gf;
        this.gfo = gfo;
        this.df = df;
        this.dfo = dfo;
        this.v = v;
        this.vo = vo;
        this.vg = vg;
        this.vgo = vgo;
    }
}