import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { useEffect } from 'react';
import { fetchData } from '../../../customhook';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { linkDataAtom, idAtom, modalOpenatom, CardDelete } from '../../../Atom';
import DeleteModal from './DeleteModal';
import { useParams } from 'react-router-dom';


function CardAll() {
    let params = useParams();
    const linkData = useRecoilValue(linkDataAtom);
    const id = useRecoilValue(idAtom);
    const setLinkdata = useSetRecoilState(linkDataAtom);
    const setId = useSetRecoilState(idAtom);
    const open = useRecoilValue(modalOpenatom);
    const isDelete = useRecoilValue(CardDelete);
    const setDelete = useSetRecoilState(CardDelete)

    useEffect(() => {
        const deleteCard = async () => {
            if (isDelete) {
                try {
                    const token = await localStorage.getItem('token');
                    const response = await axios.post('http://localhost:3000/api/v1/content/delete', {
                        contentId: id
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'token': token
                        }
                    });
                    setId(false);
                    setDelete(false)
                } catch (error) {
                    console.log("fetching error", error)
                }
            }
        }
        deleteCard()
    }, [isDelete]);

    const linktype = params.linktype!;

    useEffect(() => {
        fetchData(setLinkdata, linktype)
    }, [open, isDelete]);

    return (
        <section className="grid grid-cols-4 w-full h-fit bg-gray-200 pt-24 px-3 grid-rows-3 gap-x-2 gap-y-2">
            {id && <DeleteModal />}
            {linkData && linkData.map((item: any) => (
                <Card id={item._id} setId={setId} title={item.linkname} about={item.about} link={item.link} />
            ))}
        </section>
    )
}

export default CardAll
