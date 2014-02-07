'use strict';

angular.module('sample')
  .factory('PostService', function() {
    var posts = [{
      id: 1,
      name: 'Chris',
      text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      date: new Date('2013-12-14').getTime(),
      likes: 10
    }, {
      id: 2,
      name: 'Jacob',
      text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.',
      date: new Date('2013-12-23').getTime(),
      likes: 5
    }, {
      id: 3,
      name: 'Mark',
      text: 'This blog post shows a few different types of content that\'s supported and styled with Bootstrap. Basic typography, images, and code are all supported.',
      date: new Date('2014-01-01').getTime(),
      likes: 0
    }];

    return {
      list: function() {
        return posts;
      }
    };
  });
