import offlineIcon from "@/assets/offline.png";
import onlineIcon from "@/assets/online.png";
import { Skeleton } from "@/components/ui/skeleton";
import { useServerStatus } from "@/hooks/useServerStatus";

export default function ServerStatus() {
  const { data, isLoading, isError } = useServerStatus();

  const isOfflineState = isLoading || isError || !data?.online;

  return (
    <div className="font-mine m-4 flex justify-center text-sm text-white lg:text-base">
      <div className="flex gap-2 rounded-md bg-[url('/src/assets/background-status.png')] p-4">
        {isOfflineState ? (
          <Skeleton className="h-16 w-16" />
        ) : (
          <img
            src={data?.icon}
            alt="Ícone do Servidor"
            className="h-16 w-16"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        )}

        <div>
          <span>Lagoa dos Sapos</span>
          {isOfflineState ? (
            <>
              <Skeleton className="h-[17px] w-[364px]" />
              <Skeleton className="mt-1 h-[17px] w-[264px]" />
            </>
          ) : (
            <>
              {data?.motd?.html?.[0] && (
                <div dangerouslySetInnerHTML={{ __html: data.motd.html[0] }} />
              )}
            </>
          )}
        </div>

        <div className="mx-4 flex cursor-pointer flex-row gap-1 lg:mr-0">
          {data?.online && !isLoading && !isError ? (
            <>
              <div>
                <span>{data.players?.online ?? 0}</span>
                <span className="text-gray-500">/</span>
                <span>{data.players?.max ?? 0}</span>
              </div>
              <img src={onlineIcon} className="mt-1 h-4 w-4" />
            </>
          ) : (
            <img src={offlineIcon} className="mt-1 h-4 w-4" />
          )}
        </div>
      </div>
    </div>
  );
}
