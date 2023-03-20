const express = require("express");
const app = express();
var cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 3030;

const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
  sourceFile: 'index.xlsx',
  columnToKey: {
      A: 'quote',
      B: 'pic',
      C: 'name',
      D: 'job'
  }
});

app.get('/',(req,res)=>{
    res.send(result);
})
 
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
