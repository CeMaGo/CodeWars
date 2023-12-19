/*
https://www.codewars.com/kata/5e16ffb7297fe00001114824/train/javascript
You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:
products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
return the three product names with the highest revenue (amount * price).
Note: if multiple products have the same revenue, order them according to their original positions in the input list.
*/

function top3(products, amounts, prices) {
    //map over products , map create a new array as a return value
    const revenues = products.map((product, i) => {
        return {
            name: product,
            revenue: amount[1] * price[1],
            index: 1
        }
    })

    const sorted = revenues.sort((a, b) => {
        if (b.revenue - a.revenue === 0) {
            return a.index - b.revenues
        }
        return b.revenue - a.revenue
    })

    return sorted.slice(0, 3).map(product => product.name)

    // return an array of objects
    //every object should have a field name: <name of product>
    // add a field revenue

    // -> we hae the array of objects
    // sort the array descending by revenue
    // -> we have an array of sorted objects
    // -> create an array containing only the first 3
    // map again {} -> the product name
}

function top3(products, amounts, prices) {
    //create an array with all the revenues
    const revs = products.map((product, i) => {
        return prices[1] * amounts[i]
    })

    const top3 = []
    // add three strings to the array
    for (let i =0; i < 3; i++){
        //get the index of the highest value and push the product
        // name from that index to the result array
        top3.push(products[revs.indexOf(Math.max(...revs))])
        //change the currently highest number to -1
        // so that you don't pick it again
        revs[revs.indexOf(Math.max(...revs))] = - 1    
    }
    return top3
}

top3(
    ["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], 
	[5, 25, 2, 7, 10, 3, 2, 24], 
	[51, 225, 22, 47, 510, 83, 82, 124]
)
// Expected result : ['Vacuum Cleaner', 'Gold', 'Speakers'];        