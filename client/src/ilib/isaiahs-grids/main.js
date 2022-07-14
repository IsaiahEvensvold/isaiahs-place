

export class IGrid {
    #height; #width; #placeholder;

    constructor(args) {
        this.height = args.height;
        this.width = args.width;
        this.placeholder = args.placeholder;

        this.array = IGrid.newGridArray(this.width, this.height, this.placeholder);
        //protecting array with getters/setters not necessary atm, JS treats arrays as reference values
    }

    static newGridArray(width, height, placeholder) {
        var gridArr = [];

        for (let i = 0; i < height; i++) {
            let newRow = [];

            for (let j = 0; j < width; j++) {
                newRow.push(placeholder);
            }

            gridArr.push(newRow);
        }

        return gridArr;
    }
}