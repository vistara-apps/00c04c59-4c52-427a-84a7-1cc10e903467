'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Wallet } from '@coinbase/onchainkit/wallet';
import { Avatar, Name } from '@coinbase/onchainkit/identity';

export function Header() {
  return (
    <header className="border-b border-surface">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">DF</span>
            </div>
            <h1 className="text-xl font-bold text-fg">
              remove <span className="font-normal text-muted">background</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Wallet>
              <ConnectWallet className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-md transition-colors duration-200">
                <Avatar className="h-6 w-6" />
                <Name />
              </ConnectWallet>
            </Wallet>
          </div>
        </div>
      </div>
    </header>
  );
}
