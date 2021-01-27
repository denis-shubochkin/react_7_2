import Detector from './Detector/Detector';
import Video from './Video/Video';
import Article from './Article/Article';




export default function List(props) {
    let VideoDetector = Detector(Video);
    let ArticleDetector = Detector(Article);

    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoDetector {...item} />
                );

            case 'article':
                return (
                    <ArticleDetector {...item} />
                );
        }
    });
};