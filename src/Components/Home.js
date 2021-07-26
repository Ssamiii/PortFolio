import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';
import { Card, CardGroup } from 'react-bootstrap';

export const Home = () => {
    return (
        <div className="container">
            <div className="writer">
                <Typewriter onInit={(typewriter) => {
                    typewriter.pauseFor(2000)
                        .typeString('Hello!<br>')
                        .pauseFor(500)
                        .typeString('My Name is Samarth!')
                        .pauseFor(500)
                        .deleteChars(8)
                        .typeString('<strong>Sami!</strong>')
                        .start();
                }}
                />
            </div>
            <div className="image">
            </div>
            <div className="anime">
                <h3 className="whiteColor">I Like Anime </h3>
                <h5 className="whiteColor">Some of My Favourite Anime are</h5>
                <div className="App" >
                    <CardGroup>
                        <Card>
                            <Card.Img className="cardImage" variant="top" src="https://c4.wallpaperflare.com/wallpaper/617/713/266/tokyo-revengers-manga-hd-wallpaper-preview.jpg" />
                            <Card.Body>
                                <Card.Title className="whiteColor">Tokyo Revengers</Card.Title>
                                <Card.Text className="whiteColor">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted && nobg">OnGoing Anime, OnGoing Manga</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img className="cardImage" variant="top" src="https://images5.alphacoders.com/104/thumb-1920-1046568.jpg" />
                            <Card.Body>
                                <Card.Title className="whitecolor">One Piece</Card.Title>
                                <Card.Text className="whiteColor">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted && nobg">OnGoing Anime, Ongoing Manga</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img className="cardImage" variant="top" src="https://wallpaperaccess.com/full/2277559.jpg" />
                            <Card.Body>
                                <Card.Title className="whiteColor">Demon Slayer</Card.Title>
                                <Card.Text className="whiteColor">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body >
                            <Card.Footer >
                                <small className="text-muted && nobg">OnGoing Anime, Manga Completed</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </div>
            </div>
            <div className="playlist">
                <h3 className="whiteColor && nobg">I Like Music Alot Too</h3>
                <h5 className="whiteColor && nobg">Some of My Playlists Are</h5>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                J-Pop Playlist
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <Card border='dark'>
                                    <Card.Body>
                                        <Card.Title className="whiteColor">The Best J-Pop Playlist</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted whiteColor">For All The Weebs Out There</Card.Subtitle>
                                        <Card.Text className="whiteColor">
                                            <p>Some of the best anime opening and closing songs, all collected at single place.</p>
                                            <p className="whiteColor link"> https://open.spotify.com/user/312yhnvrsrouivdem3kxnhymsdre/playlist/2AqOEvLiw3IwzFVFUBkn9N?si=T6yeirWRRxC2jqTGPkiOVw</p>
                                        </Card.Text>
                                        <Card.Link href="https://open.spotify.com/user/312yhnvrsrouivdem3kxnhymsdre/playlist/2AqOEvLiw3IwzFVFUBkn9N?si=T6yeirWRRxC2jqTGPkiOVw">Spotify Link</Card.Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Slow Indian Indie
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <Card border='dark'>
                                    <Card.Body>
                                        <Card.Title className="whiteColor">The Best Indian Indie Playlist</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted whiteColor">For All The Indie Vibers Out There</Card.Subtitle>
                                        <Card.Text className="whiteColor">
                                            <p>Some of the best songs by all Indian Indie Artists, all collected at single place.</p>
                                            <p className="whiteColor link">https://open.spotify.com/user/312yhnvrsrouivdem3kxnhymsdre/playlist/5tfifgEACcsC57GI1bxoKw?si=pTmT1msOTzqbcvJz5izowg</p>
                                        </Card.Text>
                                        <Card.Link href="https://open.spotify.com/user/312yhnvrsrouivdem3kxnhymsdre/playlist/5tfifgEACcsC57GI1bxoKw?si=pTmT1msOTzqbcvJz5izowg">Spotify Link</Card.Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lastCon">
                    <hr />
                    <h3 className="hope"> HOPE YOU HAVE A GOOD DAY </h3>
                </div>
            </div>
        </div >
    )
}
