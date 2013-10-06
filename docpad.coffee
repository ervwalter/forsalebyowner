# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
    templateData:

    # Specify some site properties
        site:
            # The production url of our website
            url: "http://forsale-demo.ewal.net"

            # The default title of our website
            title: "For Sale By Owner (Demo)"

            # The website description (for SEO)
            description: """
                This is the demo site for the project at https://github.com/ervwalter/forsalebyowner
                """

            # The website keywords (for SEO) separated by commas
            keywords: """
                for sale, rumage sale, garage sale, gadgets, electronics
                """

            # The website author's name
            author: "Erv Walter"

            # The website author's email
            email: "erv@ewal.net"

            # segment.io api key
            #segmentIO: 'your-segmentIO-api-key'

        # -----------------------------
        # Helper Functions

        # Get the prepared site/document title
        # Often we would like to specify particular formatting to our page's title
        # we can apply that formatting here
        getPreparedTitle: ->
            # if we have a document title, then we should use that and suffix the site's title onto it
            if @document.title
                "#{@document.title} - #{@site.title}"
                # if our document does not have it's own title, then we should just use the site's title
            else
                @site.title

        # Get the prepared site/document description
        getPreparedDescription: ->
            # if we have a document description, then we should use that, otherwise use the site's description
            @document.description or @site.description

        # Get the prepared site/document keywords
        getPreparedKeywords: ->
            # Merge the document keywords with the site keywords
            @site.keywords.concat(@document.keywords or []).join(', ')

    collections:
        items: ->
            @getCollection('html').findAllLive({layout: 'item'}, [{price: -1, title: 1}])

    plugins:
        cleanurls:
            trailingSlashes: true
        assets:
            retainName: 'yes'
}



# Export the DocPad Configuration
module.exports = docpadConfig