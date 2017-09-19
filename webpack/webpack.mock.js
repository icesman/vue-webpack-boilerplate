'use strict';

module.exports = function (app) {
  app.get('/supplier/list', function (req, res) {
    let page = req.query.page;
    let page_size = req.query.page_size;

    var list = [];
    for (let i = 0; i < 300; i++) {
      list.push({
        supplier_id: i,
        supplier_name: 'JD',
        supplier_department: 'IT' + i,
        supplier_description: 'Test',
        supplier_status: i%2 === 0 ? 0 : 1
      });
    }

    res.json({
      ret: 0,
      data: {
        pagination: {
          total: 300
        },
        suppliers: list.slice((page - 1) * page_size, page * page_size > 300 ? 299 : page * page_size)
      }
    });
  });

};
