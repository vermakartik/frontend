import 'common.css'
import { BASE_URL } from 'cconfig'
import { makeStyles } from '@material-ui/core'
export const FONT_MAIN = 'Archia, sans-serif'
export const FONT_SECONDARY = 'Righteous, sans-serif' 

export const CreateClassList = (a) => { return `${a.join(" ")}` }

class UriBuilder{
    __cString = ""
    scheme = (s) => {
        this.cString = s + "://"
        return this
    }

    base = (s) => {
        this.cString += s
        return this
    }

    appendPath = (s) => {
        this.cString += "/" + s
        return this
    }

    build = () => {
        return this.cString
    }
}

export const sText = makeStyles((t) => ({
    container: {
        width: "70%",
        margin: "auto",
        [t.breakpoints.down('md')]: {
            width: "100%",
            padding: "0px 8px"
        }
    }
}))

export const ConstructBlogPath = (paths) => {

    const l = new UriBuilder().scheme("https").base(BASE_URL)
    paths.map((item, index) => {
        l.appendPath(item)
    })
    return l.build()
}       

export const ToSlug = (t) => {
    return t.split(" ").join("-")
}

export const ToDateFormat = (item) => {
    const d = new Date(item)
    return d.toDateString().substr(4)
}