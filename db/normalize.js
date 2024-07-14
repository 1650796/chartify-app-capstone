export default function normalizeId({_id, ...otherProperties}) {
    const id = _id.toString()
    return { ...otherProperties, id }
}