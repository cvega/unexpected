/*global process, expect:true*/
expect = process.env.COVERAGE ?
    require('../lib-cov/unexpected') :
    require('../index');
