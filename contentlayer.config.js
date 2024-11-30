import {makeSource, defineDocumentType} from '@contentlayer/source-files'


const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: '**/*.mdx',
    fields: {
        title: {type: 'string', required: true},
    },
}))

export default makeSource({
    contentDirPath: 'content',

})