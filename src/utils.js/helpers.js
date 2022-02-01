//format price from cents to usd using Intl.NumberFormat;

export const formatPrice = (price) => {
    const newPrice = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price / 100);
    return newPrice;
}