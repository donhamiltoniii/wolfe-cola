import "./avatar.css";

export interface AvatarProps {
  name: string;
  image?: { src: string };
  shape: "circle" | "square";
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

export const Avatar = ({ name, image, shape, size }: AvatarProps) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");
  return (
    <div
      className={[
        "avatar",
        `avatar--shape-${shape}`,
        `avatar--size-${size}`,
      ].join(" ")}
    >
      {" "}
      {image ? (
        <img className="avatar-image" src={image.src} alt={name} />
      ) : (
        <>{initials}</>
      )}{" "}
    </div>
  );
};
