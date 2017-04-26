export const removeFile = (file, fileList) => fileList.filter(x => x.id != file.id)

export default {
    removeFile
}