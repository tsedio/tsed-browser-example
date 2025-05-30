import {injector, InjectorService, logger} from "@tsed/di";
import {$asyncEmit} from "@tsed/hooks";
import React, {createContext, useEffect, useMemo} from "react";

const DIContext = createContext<InjectorService | null>(null);

export const DIProvider = ({settings, children}: {
  settings: Partial<TsED.Configuration>;
  children: React.ReactNode
}) => {
  const value = useMemo(() => injector(), []);

  useEffect(() => {
    logger().info("Starting Ts.ED...");

    injector().settings.set(settings);
    injector().load().then(() => {
      return $asyncEmit("$onReady")
    })
      .then(() => {
        logger().info("Ts.ED is ready");
      });
  }, [])

  return <DIContext.Provider value={value}>{children}</DIContext.Provider>;
};
//
// export const useInjector = () => {
//   const context = useContext(DIContext);
//
//   if (!context) throw new Error("useInjector must be used inside <DIProvider />");
//
//   return context;
// };