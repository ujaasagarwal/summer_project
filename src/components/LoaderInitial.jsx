
import { useState, useRef, useEffect } from "react";
import classes from "./LoaderInitial.module.css";

import chess from "../assets/chess.png";
import foot from "../assets/foot.png";
import chess_cut from "../assets/chess_cut.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function LoaderInitial(props) {

    const [imagesReady, setImagesReady] = useState(false);
    const chessRef = useRef(null);
    const footRef = useRef(null);
    const chessRef1 = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        const imgs = [chessRef, chessRef1, footRef];

        Promise.all(
            imgs.map(
                (ref) => new Promise((resolve) => {
                    if (ref.current.complete) resolve();
                    else ref.current.onload = resolve;
                })
            )
        ).then(() => setImagesReady(true));
    }, []);



    useGSAP(() => {
        if (!imagesReady) return;
        const chessRect = chessRef.current.getBoundingClientRect();
        const footRect = footRef.current.getBoundingClientRect();
        const width = window.innerWidth;
        const height = window.innerHeight;
        const chess_width = chessRect.width;
        const chess_height = chessRect.height;
        let foot_scale = footRef.current.style.scale;
        foot_scale = 1;
        console.log(chessRect);
        let move_x;
        if (window.innerWidth > 2700) {
            move_x = (width / 2 - chess_width / 2) * 1.2;
            foot_scale = 1.3;
        }
        else if (window.innerWidth > 2500) {
            move_x = (width / 2 - chess_width / 2) * 1.1;
            foot_scale = 1.2;
        }
        else if (window.innerWidth > 2200) {
            move_x = (width / 2 - chess_width / 2) * 0.9;
            foot_scale = 1.1;
        } else if (window.innerWidth > 2000) {
            move_x = (width / 2 - chess_width / 2) * 0.95;
        } else {
            move_x = width / 2 - chess_width / 2;
        }
        const move_y = height / 2 - chess_height / 2;
        const tl = gsap.timeline({
            onComplete: () => {
                props.onLoaded();
            }
        });

        tl.from(heroRef.current, {
            opacity: 0,
            duration: 1.5,
        })

            .from(chessRef.current, {
                autoAlpha: 0,
                duration: 0.25,
            })
            .to(heroRef.current, { duration: 0.7 })

            .set(footRef.current, {
                visibility: "visible",
            })
            .to(heroRef.current, { duration: 0.1 })

            .set(footRef.current, {
                y: move_y * 3.5,
                x: move_x * 3,
                rotation: -7,
                scale: foot_scale,
            })

            .to(heroRef.current, {
                x: 4,
                y: 1,
                duration: 0.02,
                repeat: 5,
                yoyo: true,
                ease: "none",
            }, "<")

            .set(footRef.current, {
                x: move_x * 3,
                y: move_y * 4.5,
                rotation: 15,
                scale: foot_scale * 1.1,
            })

            .to(heroRef.current, {
                x: 2,
                y: 1,
                duration: 0.1,
                repeat: 5,
                yoyo: true,
                ease: "none",
            }, "<")
            .set(footRef.current, {
                x: move_x * 3.5,
                y: move_y * 4,
                rotation: 40,
                scale: foot_scale,
            })


            .to(chessRef.current, { display: "none", duration: 0.01 })
            .set(chessRef1.current, { display: "block", })
            .to(chessRef.current, { display: "none", duration: 0.05 })
            .set(chessRef1.current, { display: "none", })
            .set(footRef.current, {
                duration: 0.4,
                x: move_x * 5,
                y: move_y * 3,
                rotation: 50,
                scale: 0.9 * foot_scale,
                ease: "none",
            })

            .to(chessRef.current, { display: "none", duration: 0.2 })


            .set(footRef.current, {
                x: move_x * 6,
                y: move_y * 2,
                rotation: 50,
                scale: 0.9 * foot_scale,
                ease: "none",
            })
            .to(chessRef.current, { display: "none", duration: 0.01 })

            .set(footRef.current, {
                x: move_x * 7,
                y: move_y * 2,
                ease: "none",

            })
            .to(chessRef.current, { display: "none", duration: 0.05 })
            .set(footRef.current, {
                x: move_x * 8.8,
                y: move_y * 2,
                ease: "none",

            })
            .to(chessRef.current, { display: "none", duration: 0.05 })
            .set(footRef.current, {
                x: move_x * 9,
                y: move_y * 2,
                ease: "none",

            })
            .to(chessRef.current, { display: "none", duration: 0.05 })


        gsap.to(heroRef.current, {
            scale: 1.05,
            duration: 1.75,
            delay: 1,
        });

    }, [imagesReady]);
    return (
        <div ref={heroRef} className={classes.hero}>
            <img ref={chessRef} className={classes.chess} src={chess} alt="Chess" />
            <img ref={chessRef1} className={classes.chess1} src={chess_cut} alt="Chess" />
            <img ref={footRef} className={classes.foot} src={foot} alt="Foot" />
        </div>
    );
}