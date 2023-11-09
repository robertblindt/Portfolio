import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


type HomeDetailProps = {}

export default function HomeDetail({}: HomeDetailProps) {
    return (
        <>
        <div className="row page-height">
            <div className="z-3 position-absolute p-5 rounded-3 top-50 start-50 translate-middle">
                <Card className='py-4 align-self-center w-50 grad border border-dark border-2 rounded-3 high-card-shadow card-move-up
                home-card-size'>
                    <h4>Hi, I'm</h4>
                    <h1 className="">Robert Blindt.</h1>
                    <h3>I am a Software Engineer with Full Stack experience with a proclivity for Backend Development</h3>
                </Card>
            </div>
            <div className="z-2 position-absolute p-5 rounded-3 top-50 start-50 translate-middle">
                <Card className='py-4 align-self-center w-50 grad border border-dark border-2 rounded-3 high-card-shadow card-move-down home-card-size align-self-end justify-content-end'>
                    <Button className="">WORDS</Button>
                </Card>
            </div>
        </div>
        </>
    )
}