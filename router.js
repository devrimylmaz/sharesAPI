var express    = require('express'),
    service    = require('./service');

module.exports = (function () {
    var router = express.Router();

    /**
     * @api {post} buyShare Buy share
     * @apiVersion 1.0.0
     * @apiName shares.buyShare
     * @apiGroup SHARE
     * @apiSampleRequest http://localhost:3000/buyShare
     *
     * @apiDescription Buy share
     *
     * @apiParam (body) {String} shareSymbol Symbol of the share
     * @apiParam (body) {Integer} quantity Quantity
     * @apiParam (body) {String} userId Id of the user
     * @apiParam (body) {String} portfolioId Id of the portfolio
     *
     * @apiSuccessExample Success-Response:
     * HTTP/1.1 200 OK
     * {
     *     "success": true
     * }
     *
     */
    router.post('/buyShare', service.shares.buyShare);

    /**
     * @api {post} sellShare Sell share
     * @apiVersion 1.0.0
     * @apiName shares.sellShare
     * @apiGroup SHARE
     * @apiSampleRequest http://localhost:3000/sellShare
     *
     * @apiDescription Sell share
     *
     * @apiParam (body) {String} shareSymbol Symbol of the share
     * @apiParam (body) {Integer} quantity Quantity
     * @apiParam (body) {String} userId Id of the user
     * @apiParam (body) {String} portfolioId Id of the portfolio
     *
     * @apiSuccessExample Success-Response:
     * HTTP/1.1 200 OK
     * {
     *     "success": true
     * }
     *
     */
    router.post('/sellShare', service.shares.sellShare);

    return router;
})();