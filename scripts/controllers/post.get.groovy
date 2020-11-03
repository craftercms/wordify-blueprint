import org.craftercms.sites.wordify.SearchHelper

def id  = params.id ? params.id : ""
templateModel.contentModel = siteItemService.getSiteItem("/site/components/post/" + id + ".xml")
templateModel.levelDescriptor = siteItemService.getSiteItem("/site/website/crafter-level-descriptor.level.xml")

def searchHelper = new SearchHelper(elasticsearch, urlTransformationService)
def page = (params.page && Integer.parseInt(params.page) > 0) ? (Integer.parseInt(params.page) - 1) : 0
def postsPerPage = 8

templateModel.postsInfo = searchHelper.getPostsInfo(page, postsPerPage, templateModel.contentModel.categories_o.item.key.text, null, templateModel.contentModel.objectId.text)

return "/templates/web/post.ftl"