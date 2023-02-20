import React, { FC } from "react";

type TLevel = 'app'|'transport'|'network'|'mac';
type TProtocolItem = Record<TLevel, {
  name: string
  desc: string
}>

const defaultProtocols:TProtocolItem = {
  app: {
    name: 'HTTP',
    desc: ''
  },
  transport: {
    name: 'TCP',
    desc: ''
  },
  network: {
    name: "IP",
    desc: ""
  },
  mac: {
    name: "MAC",
    desc: ''
  }
}

export const Protocol: FC<{
  config: Partial<TProtocolItem>;
}> = ({
  config
}) => {
  const _config = JSON.parse(JSON.stringify(defaultProtocols));
  Object.keys(config).forEach((c) => {
    _config[c] = {..._config[c], ...config[c]}
  });

  return (
    <div>
      <div></div>
    </div>
  );
};