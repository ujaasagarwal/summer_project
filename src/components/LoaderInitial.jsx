import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import classes from "./LoaderInitial.module.css";
import chess from "../assets/chess.png";
import foot from "../assets/foot.png";
import chess_cut from "../assets/chess_cut.png";
gsap.registerPlugin(useGSAP);


const LoaderInitial = (props) => {
    const heroRef = useRef();
    const chessRef = useRef();
    const footRef = useRef();
    const chessRef1 = useRef();

    useGSAP(() => {
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
                y: "-10%",
                x: "-8%",
                rotation: -7,
                scale: 1,
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
                bottom: "-13vh",
                right: "-8vw",
                rotation: 15,
                scale: 1.1,
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
                bottom: "-5vh",
                right: "-8vw",
                rotation: 25,
                scale: 1,
            })

            .to(heroRef.current, { duration: 0.03 })
            .set(footRef.current, {
                bottom: "0vh",
                right: "-8vw",
                rotation: 50,
            })
            .to(chessRef.current, { display: "none", duration: 0.01 })
            .set(chessRef1.current, { display: "block", })
            .to(chessRef.current, { display: "none", duration: 0.01 })
            .set(chessRef1.current, { display: "none", })
            .set(footRef.current, {
                duration: 0.4,
                x: "30vw",
                y: "-20vh",
                rotation: 40,
                scale: 0.9,
                ease: "none",
            })

            .to(chessRef.current, { display: "none", duration: 0.2 })

            // FOOT FLIES AWAY
            .set(footRef.current, {
                x: "25vw",
                y: "-20vh",
                rotation: 50,
                scale: 0.9,
                ease: "none",
            })
            .to(chessRef.current, { display: "none", duration: 0.01 })

            .set(footRef.current, {
                x: "40vw",
                y: "-25vh",
                ease: "none",

            })
            .to(chessRef.current, { display: "none", duration: 0.05 })
            .set(footRef.current, {
                x: "50vw",
                ease: "none",
            }).to(chessRef.current, { display: "none", duration: 0.05 })
            .set(footRef.current, {
                x: "100vw",
                ease: "none",
            })

        gsap.to(heroRef.current, {
            scale: 1.05,
            duration: 1.75,
            delay: 1,
        });

    }, []);


    return (
        <div ref={heroRef} className={classes.hero}>
            <img ref={chessRef} className={classes.chess} src={chess} alt="Chess" />
            <img ref={chessRef1} className={classes.chess1} src={chess_cut} alt="Chess" />
            <img ref={footRef} className={classes.foot} src={foot} alt="Foot" />
        </div>
    );
};

export default LoaderInitial;