import Image from "next/image";

export default function HostCard({ host }) {
    return (
        <div className="flex flex-col">
            <p className="font-semibold pl-9 text-2xl mb-5">
                About the Event Host
            </p>
            <div className="flex items-center">
                <Image
                    className="ml-9 rounded-full"
                    src={host.avatar}
                    alt={host.name}
                    width={50}
                    height={50}
                ></Image>
                <p className="ml-4">{host.name}</p>
            </div>
        </div>
    );
}
