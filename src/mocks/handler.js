import { rest } from "msw"
import faker from 'faker/locale/tr'

export default [

  rest.post('/products', (req, res, ctx) => {
    let productSize = req.body.limit
    let products = []
    for (let index = 0; index < productSize; index++) {
      let sliderImage = []
      for(let element = 0; element < 5; element++){
        sliderImage.push(faker.image.image())
      }
      let item = {
        id: faker.datatype.uuid(),
        price: parseFloat(faker.commerce.price()),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        image: faker.image.image(),
        sliderImage: sliderImage,
        adj: faker.commerce.productAdjective(),
        category: faker.commerce.productMaterial(),
        cat: faker.commerce.product()
      }
      products.push(item)
    }
    return res(
      ctx.json(products)
    )
  })
]