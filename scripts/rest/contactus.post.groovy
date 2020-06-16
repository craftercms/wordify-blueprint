import org.craftercms.engine.exception.HttpStatusCodeException
import java.util.logging.Logger

Logger logger = Logger.getLogger("")

try {
    def data = request.reader.text

    logger.info ("---CONTACT FORM DATA---")
    logger.info (data)

    result = [success: true, message: "Thank you!"]
} catch(e) {
    throw new HttpStatusCodeException(500, "Internal Server Error", e)
}