var mongoose = require('mongoose')
var Schema = mongoose.Schema

let BearSchema = new Schema({
	name: String
})

export default mongoose.model('Bear', BearSchema)
