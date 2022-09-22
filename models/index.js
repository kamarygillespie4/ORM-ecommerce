// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
//product can only belong to one category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
});

// Categories have many Products
// each category can have many products
Category.hasMany(Product, {
    foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
//products can have several tags
Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
//tags can go on several products
Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id',
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};