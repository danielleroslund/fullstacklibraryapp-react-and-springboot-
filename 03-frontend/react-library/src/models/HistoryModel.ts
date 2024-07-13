class HistoryModel {
    id: number;
    userEmail: string;
    checkoutDate: string;
    returnedDate: string;
    title: string;
    author: string;
    description: string;
    img: string;

    constructor(id: number, userEmail: string, checkoutDate: string, reuturnedDate: string,
        title: string, author: string, description: string, img: string) {
            this.id = id;
            this.userEmail = userEmail;
            this.checkoutDate = checkoutDate;
            this.returnedDate = reuturnedDate; 
            this.title = title;
            this.author = author;
            this.description = description;
            this.img = img;
        }
}

export default HistoryModel;