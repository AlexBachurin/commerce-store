//format price from cents to usd using Intl.NumberFormat;

export const formatPrice = (price) => {
    const newPrice = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price / 100);
    return newPrice;
}

//get unique values from array of objects

export const getUniqueValues = (data) => {
    //set will have only unique values, then spread it and return as array, also add 'all' in the start if u want
    return ['all', ...new Set(data)];
}