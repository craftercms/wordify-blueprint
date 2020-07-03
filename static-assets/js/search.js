/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

(function($) {
  const pagination = {
    initialized: false,
    totalResults: 0,
    itemsPerPage: 10,
    defaultOpts: {
      totalPages: 1,
      first: null,
      last: null,
      prev: '<',
      next: '>',
      prevClass: 'page-item',
      nextClass: 'page-item',
      pageClass: 'page-item'
    }
  };

  $(function() {
    const searchParams = new URLSearchParams(window.location.search);
    let queryParam = searchParams.get('q');

    if (queryParam) {
      queryParam = decodeURI(queryParam).trim();
    }

    const source = $('#search-results-template').html();
    const template = Handlebars.compile(source);

    const doSearch = (userTerm, page = 0) => {
      $('#searchResults').empty();
      $('#searchPagination').hide();
      $('.search-form').find('[name="q"]').val(userTerm);

      const params = {
        start: page * pagination.itemsPerPage,
        rows: pagination.itemsPerPage
      };

      if(userTerm) {
        params.userTerm = userTerm;
      }

      $.get('/api/search.json', params).done(function(data) {
        pagination.totalResults = typeof data.total === 'object' ? data.total.value : data.total;

        if (data.hits === null) {
          data.hits = [];
        }

        const results = data.hits.map((result) => {
          let date = new Date(result.lastModifiedDate).toLocaleDateString("en-US",
            { month: 'short', day: 'numeric', year: 'numeric' });

          return {
            url: result.url,
            headline: result.headline,
            mainImage: result.mainImage,
            authorName: result.authorBio.item.component.name_s,
            authorImage: result.authorBio.item.component.profilePic_s,
            lastModifiedDate: date
          }
        });

        const html = template({ results });
        $('#searchResults').append(`<p>${data.total} result${data.total === 1 ? '' : 's'} found</p>`)
        $('#searchResults').append(html);

        const totalPages = Math.ceil(pagination.totalResults/pagination.itemsPerPage);
        if (!pagination.initialized && totalPages > 1) {
          $('#searchPagination').show();
          $('#searchPagination').twbsPagination({
            ...pagination.defaultOpts,
            totalPages: totalPages,
            onPageClick: function(evt, page) {
              doSearch(userTerm, page -1);
            }
          })
        }

      });
    }

    doSearch(queryParam);

    $(document).on('submit','form.search-form',function(e){
      e.preventDefault();
      const query = $(e.currentTarget).find('[name="q"]').val();

      doSearch(query);
    });
  });

})(jQuery);