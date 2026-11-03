import { useEffect, useState } from "react";

function Content() {
    const [techVideos, setTechVideos] = useState([]);
    const [tgogVideos, setTgogVideos] = useState([]);
    const [techReels, setTechReels] = useState([]);
    const [tgogReels, setTgogReels] = useState([]);

    const [techLoading, setTechLoading] = useState(true);
    const [tgogLoading, setTgogLoading] = useState(true);
    const [reelsLoading, setReelsLoading] = useState(true);
    const [tgogReelsLoading, setTgogReelsLoading] = useState(true);

    const [techError, setTechError] = useState(false);
    const [tgogError, setTgogError] = useState(false);
    const [reelsError, setReelsError] = useState(false);
    const [tgogReelsError, setTgogReelsError] = useState(false);

    useEffect(() => {
        // TechDecoded YouTube
        fetch("http://localhost:8080/api/youtube/techdecoded")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("TechDecoded YouTube request failed");
                }
                return response.json();
            })
            .then((data) => setTechVideos(data.items || []))
            .catch((error) => {
                console.error("TechDecoded YouTube error:", error);
                setTechError(true);
            })
            .finally(() => setTechLoading(false));

        // TGOG LIVE YouTube
        fetch("http://localhost:8080/api/youtube/tgog")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("TGOG YouTube request failed");
                }
                return response.json();
            })
            .then((data) => setTgogVideos(data.items || []))
            .catch((error) => {
                console.error("TGOG YouTube error:", error);
                setTgogError(true);
            })
            .finally(() => setTgogLoading(false));

        // TechDecoded Instagram Reels
        fetch("http://localhost:8080/api/instagram/techdecoded")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("TechDecoded Instagram request failed");
                }
                return response.json();
            })
            .then((data) => {
                const reels = (data.data || []).filter(
                    (item) =>
                        item.media_type === "VIDEO" &&
                        item.permalink
                );

                setTechReels(reels.slice(0, 2));
            })
            .catch((error) => {
                console.error("TechDecoded Instagram error:", error);
                setReelsError(true);
            })
            .finally(() => setReelsLoading(false));

        // TGOG LIVE Instagram Reels
        fetch("http://localhost:8080/api/instagram/tgog")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("TGOG Instagram request failed");
                }
                return response.json();
            })
            .then((data) => {
                const reels = (data.data || []).filter(
                    (item) =>
                        item.media_type === "VIDEO" &&
                        item.permalink
                );

                setTgogReels(reels.slice(0, 2));
            })
            .catch((error) => {
                console.error("TGOG Instagram error:", error);
                setTgogReelsError(true);
            })
            .finally(() => setTgogReelsLoading(false));
    }, []);

    const renderYouTubeVideos = (videos, loading, error) => {
        if (loading) {
            return <p>Loading latest videos...</p>;
        }

        if (error) {
            return <p>Videos unavailable. Please try again later.</p>;
        }

        if (videos.length === 0) {
            return <p>No videos found.</p>;
        }

        return videos.map((video) => {
            const snippet = video.snippet || {};

            const videoId =
                video.contentDetails?.videoId ||
                snippet.resourceId?.videoId;

            const thumbnail =
                snippet.thumbnails?.maxres?.url ||
                snippet.thumbnails?.high?.url ||
                snippet.thumbnails?.medium?.url ||
                snippet.thumbnails?.default?.url;

            if (!videoId) return null;

            return (
                <a
                    key={videoId}
                    href={`https://www.youtube.com/watch?v=${videoId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="media-card"
                >
                    <div className="media-preview">
                        {thumbnail && (
                            <img
                                src={thumbnail}
                                alt={snippet.title || "YouTube video"}
                                className="youtube-thumbnail"
                                loading="lazy"
                            />
                        )}
                    </div>

                    <div className="media-info">
                        <small>YOUTUBE</small>
                        <strong>
                            {snippet.title || "Latest Video"}
                        </strong>
                    </div>
                </a>
            );
        });
    };

    const renderReels = (reels, loading, error, accountName) => {
        if (loading) {
            return <p>Loading latest Reels...</p>;
        }

        if (error) {
            return (
                <p>
                    Instagram Reels unavailable. Please try again later.
                </p>
            );
        }

        if (reels.length === 0) {
            return <p>No Reels found.</p>;
        }

        return reels.map((reel) => {
            const thumbnail =
                reel.thumbnail_url ||
                reel.media_url;

            const caption = reel.caption?.trim();

            return (
                <a
                    key={reel.id}
                    href={reel.permalink}
                    target="_blank"
                    rel="noreferrer"
                    className="media-card"
                >
                    <div
                        className="media-preview instagram-preview"
                        style={{
                            "--reel-bg": thumbnail
                                ? `url("${thumbnail}")`
                                : "none"
                        }}
                    >
                        {thumbnail ? (
                            <img
                                src={thumbnail}
                                alt={
                                    caption ||
                                    `${accountName} Instagram Reel`
                                }
                                className="youtube-thumbnail"
                                loading="lazy"
                            />
                        ) : (
                            <span>Instagram Reel</span>
                        )}
                    </div>

                    <div className="media-info">
                        <small>INSTAGRAM REEL</small>
                        <strong>
                            {caption
                                ? caption.length > 90
                                    ? `${caption.slice(0, 90)}...`
                                    : caption
                                : "Watch latest Reel"}
                        </strong>
                    </div>
                </a>
            );
        });
    };

    return (
        <section id="content" className="content-section">
            <p className="section-tag">WHAT I CREATE</p>

            <h2>Content</h2>

            <p className="section-description">
                From technology and cybersecurity to gaming and live streams,
                here's what I create and share online.
            </p>

            <div className="content-cards">
                {/* TechDecoded */}
                <div className="content-card">
                    <p className="content-category">
                        TECH • CYBERSECURITY • AI
                    </p>

                    <h3>TechDecoded</h3>

                    <p>
                        Technology, cybersecurity, programming, AI and the
                        things happening behind the screens.
                    </p>

                    <h4>Latest YouTube Shorts</h4>

                    <div className="media-grid">
                        {renderYouTubeVideos(
                            techVideos.slice(0, 2),
                            techLoading,
                            techError
                        )}
                    </div>

                    <h4>Latest Instagram Reels</h4>

                    <div className="media-grid">
                        {renderReels(
                            techReels,
                            reelsLoading,
                            reelsError,
                            "TechDecoded"
                        )}
                    </div>

                    <div className="card-links">
                        <a
                            href="https://www.youtube.com/@TechDecoded2026yt"
                            target="_blank"
                            rel="noreferrer"
                            className="card-btn youtube-btn"
                        >
                            YouTube
                        </a>

                        <a
                            href="https://www.instagram.com/techdecoded2026/"
                            target="_blank"
                            rel="noreferrer"
                            className="card-btn instagram-btn"
                        >
                            Instagram
                        </a>
                    </div>
                </div>

                {/* TGOG LIVE */}
                <div className="content-card">
                    <p className="content-category">
                        GAMING • LIVESTREAMS • CO-OP
                    </p>

                    <h3>TGOG LIVE</h3>

                    <p>
                        Gaming livestreams, gameplay, co-op adventures and
                        gaming experiences.
                    </p>

                    <h4>Latest YouTube Videos</h4>

                    <div className="media-grid">
                        {renderYouTubeVideos(
                            tgogVideos.slice(0, 2),
                            tgogLoading,
                            tgogError
                        )}
                    </div>

                    <h4>Latest Reels</h4>

                    <div className="media-grid">
                        {renderReels(
                            tgogReels,
                            tgogReelsLoading,
                            tgogReelsError,
                            "TGOG LIVE"
                        )}
                    </div>

                    <div className="card-links">
                        <a
                            href="https://www.youtube.com/@THEGODOFGAMES26"
                            target="_blank"
                            rel="noreferrer"
                            className="card-btn youtube-btn"
                        >
                            YouTube
                        </a>

                        <a
                            href="https://www.instagram.com/tgog_live/"
                            target="_blank"
                            rel="noreferrer"
                            className="card-btn instagram-btn"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Content;