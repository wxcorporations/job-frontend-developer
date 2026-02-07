import React, { useCallback } from "react";
import { useMemo, useRef, useState } from "react";

import octo from "@assets/octocat-zero-otmized.png";
import useStoreFavorites from "../../hooks/useStoreFavorites";

import CardFavorites from "../CardFavorites";
import Categories from "../Categories";
import Highlight from "../HighLight";
import Modal from "../Modal";
import YoutubeEmbed from "../YoutubeEmbed";

import "./Favorites.scss";

interface ICategory {
    id: number;
    name: string;
}

export default function Favorites() {
    const { list, addFavorite, removeFavorite } = useStoreFavorites();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [videoModal, setVideoModal] = useState<string>("");
    const [categorias, setCategorias] = useState<ICategory[]>([]);

    const elINputCategory = useRef<HTMLInputElement>(null);

    const factoryCategorie = (name: string): ICategory => {
        return {
            id: categorias.length + 1,
            name,
        };
    };

    const handleCreateCategorie = (e: any) => {
        e.preventDefault();

        if (elINputCategory && elINputCategory.current) {
            const data: ICategory[] = [...categorias];
            data.push(factoryCategorie(elINputCategory.current.value));

            setCategorias(data);
        }
    };

    const handleFavorite = useCallback((status: boolean, data: any) => {
        const action = status ? addFavorite : removeFavorite;
        action({ ...data, status });
    }, [addFavorite, removeFavorite]);

    const handleVideoModal = useCallback((id: string) => {
        if (!id) { return null; }

        setVideoModal(id);
        setModalOpen(true);
    }, []);

    const whapperCard = (data: any) => {
        const onFavorite = (status: boolean) => handleFavorite(status, data);

        return (
            <div className="whapper" key={`card-${data.id}`}>
                <CardFavorites
                    id={data.id}
                    channel={data.channel}
                    status={data.status}
                    thumbnail={data.thumbnail}
                    title={data.title}
                    handleFavoriteCallback={onFavorite}
                    handlePlayCallback={handleVideoModal}
                />
            </div>
        );
    };

    const cards = useMemo(() => {
        if (!list.length) { return []; }

        return list.map((whapperCard));
    }, [list]);

    const templateListNone = () => {
        return (
            <>
                <div className="w-100 vh-75 d-flex flex-column justify-content-center align-items-center">
                    <img
                        src={octo}
                        alt="icon do octocat triste, por não ter favoritos"
                        width={256}
                        height={256}
                    />
                    <h2 className="mt-5 text-secondary">
                        0 favorito :(
                    </h2>
                </div>
            </>
        );
    };

    const templateModal = () => {
        return (
            <>
                {
                    modalOpen
                        ? <div className="whapper-modal">
                            <Modal onClose={() => setModalOpen(false)}>
                                <YoutubeEmbed id={videoModal} />
                            </Modal>
                        </div>
                        : ""
                }
            </>
        );
    };

    const TemplateNewCategory = () => {
        return (
            <>
                {
                    <div>
                        <form action="#">
                            <label htmlFor="categoria">Nome da categoria</label>
                            <br />
                            <input ref={elINputCategory} id="categoria" type="text" placeholder="Nome" />

                            <button onClick={handleCreateCategorie}>Criar</button>
                        </form>
                    </div>
                }
            </>
        );
    };

    return (
        <>
            <div className="favorite__content">
                <Highlight title="FAVORITOS" description="FAVORITOS"></Highlight>

                {
                    cards.length
                        ? <div className="favorite__list">{cards}</div>
                        : templateListNone()
                }

                <button>Criar categoria</button>

                {
                    categorias.length && categorias.map((item: any) => {
                        return (<>
                            <Categories title={item.name} key={item.id}>
                                <span>Conteudo da seção</span>
                            </Categories>
                        </>);
                    })
                }
            </div>

            {templateModal()}
            {TemplateNewCategory()}
        </>
    );
}
