import { useRef } from "react";
import { FaPlus } from "react-icons/fa";


export function Upload() {
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-submit when files are selected
    const handleChange = async () => {
        const files = inputRef.current?.files;
        if (!files || files.length === 0) return;
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i]);
        }
        try {
            await fetch("https://nook-yvgg.onrender.com/media/upload/default", {
                method: "POST",
                credentials: "include",
                body: formData,
            }).then(response => response.json()).then(data => {
                console.log(data);
            });
        } catch (err) {
            console.log(err);
        } finally {
            // Reset input so the same file can be selected again if needed
            if (inputRef.current) inputRef.current.value = "";
        }
    };

    // Open file picker when + button is clicked
    const handleButtonClick = () => {
        inputRef.current?.click();
    };

    return (
        <div>
            <input
                ref={inputRef}
                type="file"
                className="hidden"
                accept="image/*,video/*,audio/*"
                multiple
                onChange={handleChange}
            />
            <button
                type="button"
                onClick={handleButtonClick}
                className=""
                aria-label="Upload"
            >
                <FaPlus />
            </button>
        </div>
    );
}