import Vue from 'vue'



Vue.filter('amt', function(v){
  // var pattern = /(?=((?!\b)\d{3})+$)/g;
  // return Number(v).toFixed(2)

  if (v && v != null) {
    v = String(v);
    var left = v.split('.')[0], right = v.split('.')[1];
    right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.00';
    var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
    return (Number(v) < 0 ? '-' : '') + temp.join(',').split('').reverse().join('') + right;
  } else if (v === 0) {
    return '0.00';
  } else {
    return '';
  }
})


