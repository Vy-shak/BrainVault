import { atom } from "recoil";


const linkDataAtom = atom({
    key: "linkdata",
    default: null,
})

const idAtom = atom({
    key: "id",
    default: false
});

const modalOpenatom = atom({
    key: 'openmodel',
    default: false
});

const CardDelete = atom({
    key: 'delete',
    default: false
})

export { linkDataAtom, idAtom, modalOpenatom, CardDelete }