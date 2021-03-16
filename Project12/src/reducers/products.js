var initialState =[
    {
        id : 1,
        name : "Iphone 6",
        price : 4000000,
        status : true
    },
    {
        id : 1,
        name : "Iphone 8 Plus",
        price : 8000000,
        status : false
    },
    {
        id : 1,
        name : "Iphone X",
        price : 12000000,
        status : false
    }
];

const products = (state = initialState,action) =>{
    switch(action.type){
        default : return [...state];
    }
};
export default products;