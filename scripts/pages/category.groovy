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

import org.craftercms.sites.wordify.TaxonomyHelper
import org.craftercms.sites.wordify.SearchHelper

def requestURI = request.requestURI
def taxonomyHelper = new TaxonomyHelper(siteItemService)
def searchHelper = new SearchHelper(elasticsearch, urlTransformationService)
def recentPosts = searchHelper.searchPosts(null, 0, 5)
def itemId = params.id
def taxonomy

if (requestURI == '/category') {
  taxonomy = taxonomyHelper.getTaxonomy("categories")
} else {
  taxonomy = taxonomyHelper.getTaxonomy("tags")
}

if (itemId) {
  def currentItem = taxonomy.find{ it.key.text == itemId }
  templateModel.itemId = itemId
  templateModel.currentItem = currentItem
}

templateModel.requestURI = requestURI
templateModel.taxonomy = taxonomy
templateModel.recentPosts = recentPosts.hits