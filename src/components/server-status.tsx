import { ClickableSoundImage } from "@/components/jokes/clickable-sound-image";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton";
import { useServerStatus } from "@/hooks/use-server-status";
import Image from "next/image";

const images = {
  offline: "/offline.png",
  online: "/online.png",
};

export function ServerStatus() {
  const { data, isLoading, isError } = useServerStatus();

  const isOfflineState = isLoading || isError || !data?.online;
  const isOnlineState = data?.online && !isLoading && !isError;

  function listPlayers() {
    if (!data?.online || !data.players || data.players.online === 0) {
      return [];
    }

    const { online, list } = data.players;
    const result: string[] = [];

    if (list && list.length > 0) {
      list.forEach((player) => {
        result.push(player.name);
      });
    }

    const listedPlayersCount = list?.length || 0;
    const anonymousPlayersCount = online - listedPlayersCount;

    if (anonymousPlayersCount > 0) {
      if (anonymousPlayersCount == 1) {
        result.push("Player Anônimo");
      } else {
        result.push(`... ${anonymousPlayersCount} Players Anônimos`);
      }
    }

    return result;
  }

  return (
    <div className="font-mine rounded-md border bg-[url('/background-status.png')] p-4">
      <div className="flex justify-between">
        <div className="flex gap-2">
          {isOfflineState ? (
            <Skeleton className="h-16 w-16" />
          ) : (
            <ClickableSoundImage
              src={data?.icon || images.offline}
              soundUrl={"/sounds/froglaugh.mp3"}
              alt="Ícone do Servidor"
              volume={0.1}
              width={64}
              height={64}
            />
          )}
          <div className="mt-1 text-sm lg:text-base">
            <span className="text-white">Lagoa dos Sapos</span>
            {isOfflineState ? (
              <>
                <Skeleton className="h-[17px] w-[140px] lg:h-[17px] lg:w-[364px]" />
                <Skeleton className="mt-1 h-[17px] w-[100px] lg:h-[17px] lg:w-[264px]" />
              </>
            ) : (
              <>
                {data?.motd?.html?.[0] && (
                  <div
                    id="motd"
                    className="text-balance"
                    dangerouslySetInnerHTML={{ __html: data.motd.html[0] }}
                  />
                )}
              </>
            )}
          </div>
        </div>

        <HoverCard>
          <HoverCardTrigger className="cursor-pointer" asChild>
            <Button
              variant={"link"}
              className="pr-0 text-gray-400 hover:no-underline"
            >
              {isOnlineState ? (
                <>
                  <div>
                    <span>{data.players?.online ?? 0}</span>
                    <span className="text-gray-600">/</span>
                    <span>{data.players?.max ?? 0}</span>
                  </div>
                  <Image
                    src={images.online}
                    className="-mt-3"
                    width={16}
                    height={16}
                    alt="Ícone Online"
                  />
                </>
              ) : (
                <Image
                  src={images.offline}
                  className="-mt-3"
                  width={16}
                  height={16}
                  alt="Ícone Offline"
                />
              )}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent side="top" className="flex">
            {isOnlineState && data.players?.online ? (
              <div className="flex flex-col gap-1">
                {listPlayers().map((player, index) => (
                  <span className="font-mine-icon text-sm" key={index}>
                    {player}
                  </span>
                ))}
              </div>
            ) : (
              <span>Sem players no momento.</span>
            )}
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}
