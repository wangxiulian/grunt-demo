const expect = require('chai').expect,
      transform = require('../entropy.js').transform,
      h = require('../entropy.js').h,
      roundFractional = require('../entropy.js').roundFractional;

describe('transform 函数测试套件', function() {
  it('命令行参数正确，逗号分隔概率值', function(){
    var arg = ['node', 'app', '0.4,0.6'];
    var result = transform(arg);

    expect(result.isOK).to.be.ok;
    expect(result.p.length).to.be.equal(2);                      
  });

  it('命令行参数正确，空格分隔概率值', function(){
    var arg = ['node', 'app', '0.4', '0.6'];
    var result = transform(arg);

    expect(result.isOK).to.be.ok;
    expect(result.p.length).to.be.equal(2);                      
  });

  it('命令行参数错误，概率和小于 1', function(){
    var arg = ['node', 'app', '0.3', '0.6'];
    var result = transform(arg);

    expect(result.isOK).not.to.be.ok;                  
  });

  it('命令行参数错误，概率和大于 1', function(){
    var arg = ['node', 'app', '0.7', '0.6'];
    var result = transform(arg);

    expect(result.isOK).not.to.be.ok;                  
  });

  it('命令行参数错误，概率不是数字', function(){
    var arg = ['node', 'app', 'a', '0.6'];
    var result = transform(arg);

    expect(result.isOK).not.to.be.ok;                  
  });

  it('命令行参数错误，概率小于 0', function(){
    var arg = ['node', 'app', '-3', '0.6'];
    var result = transform(arg);

    expect(result.isOK).not.to.be.ok;                  
  });

  it('命令行参数错误，概率大于 1', function(){
    var arg = ['node', 'app', '3', '0.6'];
    var result = transform(arg);

    expect(result.isOK).not.to.be.ok;                  
  });

  it('命令行参数错误，错误使用逗号', function(){
    var arg = ['node', 'app', '0.4,', '0.6'];
    var result = transform(arg);

    expect(result.isOK).not.to.be.ok;                 
  });

  it('命令行参数错误，概率数据不足', function(){
    var arg = ['node', 'app', '0.4'];
    var result = transform(arg);

    expect(result.isOK).not.to.be.ok;                  
  });
});

// TODO
describe('h 函数测试套件', function() {});

// TODO
describe('sigma 函数测试套件', function() {});

// TODO
describe('validate 函数测试套件', function() {});

// TODO
describe('roundFractional 函数测试套件', function() {});
