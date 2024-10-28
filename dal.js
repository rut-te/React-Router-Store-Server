const booksArr=[
    {id:1,title:'aaa',description:'xchjklfhgjkvbcvbnbv',image:"https://marloesdevries.com/wp-content/uploads/2022/05/greatescapewoodlandsnursinghome-754x1024.jpg"},
    {id:2,title:'bbb',description:'xchjklfhgjkvbcvbnbv',image:"https://marloesdevries.com/wp-content/uploads/2022/05/greatescapewoodlandsnursinghome-754x1024.jpg"},
    {id:3,title:'aba',description:'xchjklfhgjkvbcvbnbv',image:"https://marloesdevries.com/wp-content/uploads/2022/05/greatescapewoodlandsnursinghome-754x1024.jpg"},
    {id:4,title:'bbvv',description:'xchjklfhgjkvbcvbnbv',image:"https://marloesdevries.com/wp-content/uploads/2022/05/greatescapewoodlandsnursinghome-754x1024.jpg"},
    {id:5,title:'byt',description:'xchjklfhgjkvbcvbnbv',image:"https://marloesdevries.com/wp-content/uploads/2022/05/greatescapewoodlandsnursinghome-754x1024.jpg"},
    {id:6,title:'fgbb',description:'xchjklfhgjkvbcvbnbv',image:"https://marloesdevries.com/wp-content/uploads/2022/05/greatescapewoodlandsnursinghome-754x1024.jpg"}
];

const getAll = () => {
    return new Promise((resolve, reject) => {
        resolve(booksArr);
    });
};

const crudFunctions = {
    getAll
};

module.exports = crudFunctions;