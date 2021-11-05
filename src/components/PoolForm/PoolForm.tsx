import { FC, useState, ChangeEvent } from "react";
import { ethers } from "ethers";
import Tabs from "../Tabs";
import AddLiquidityForm from "./AddLiquidityForm";
import RemoveLiquidityForm from "./RemoveLiquidityForm";
import { QuerySubState } from "@reduxjs/toolkit/dist/query/core/apiState";

import {
  Wrapper,
  Info,
  InfoText,
  ROIWrapper,
  ROIItem,
  Logo,
  TabContentWrapper,
  PositionWrapper,
  PositionBlock,
  PositionBlockItem,
  PositionBlockItemBold,
} from "./PoolForm.styles";
import { formatUnits, numberFormatter } from "utils";

interface Props {
  symbol: string;
  icon: string;
  decimals: number;
  apy: string;
  totalPoolSize: ethers.BigNumber;
  totalPosition: ethers.BigNumber;
  position: ethers.BigNumber;
  feesEarned: ethers.BigNumber;
  bridgeAddress: string;
  lpTokens: ethers.BigNumber;
  tokenAddress: string;
  ethBalance: QuerySubState<any> | null | undefined;
  erc20Balances: QuerySubState<any> | null | undefined;
  setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setDepositUrl: React.Dispatch<React.SetStateAction<string>>;
  balance: ethers.BigNumber;
  wrongNetwork?: boolean;
}

const PoolForm: FC<Props> = ({
  symbol,
  icon,
  decimals,
  totalPoolSize,
  totalPosition,
  apy,
  position,
  feesEarned,
  bridgeAddress,
  lpTokens,
  tokenAddress,
  setShowSuccess,
  setDepositUrl,
  balance,
  wrongNetwork,
}) => {
  const [inputAmount, setInputAmount] = useState("");
  const [removeAmount, setRemoveAmount] = useState(0);
  const [error] = useState<Error>();
  return (
    <Wrapper>
      <Info>
        <Logo src={icon} />
        <InfoText>{symbol} Pool</InfoText>
        <PositionWrapper>
          <PositionBlock>
            <PositionBlockItem>My deposit</PositionBlockItem>
            <PositionBlockItem>
              {formatUnits(position, decimals)} {symbol}
            </PositionBlockItem>
          </PositionBlock>
          <PositionBlock>
            <PositionBlockItem>Fees earned</PositionBlockItem>
            <PositionBlockItem>
              {Number(formatUnits(feesEarned, decimals)) < 0
                ? formatUnits(feesEarned, decimals)
                : "0.0000"}{" "}
              {symbol}
            </PositionBlockItem>
          </PositionBlock>
          <PositionBlock>
            <PositionBlockItemBold>Total</PositionBlockItemBold>
            <PositionBlockItemBold>
              {formatUnits(totalPosition, decimals)} {symbol}
            </PositionBlockItemBold>
          </PositionBlock>
        </PositionWrapper>
        <ROIWrapper>
          <ROIItem>Total Pool Size:</ROIItem>
          <ROIItem>
            {formatUnits(totalPoolSize, decimals)} {symbol}
          </ROIItem>
        </ROIWrapper>
        <ROIWrapper>
          <ROIItem>Estimated APY:</ROIItem>
          <ROIItem>{numberFormatter(Number(apy)).replaceAll(",", "")}%</ROIItem>
        </ROIWrapper>
      </Info>
      <Tabs>
        <TabContentWrapper data-label="Add">
          <AddLiquidityForm
            wrongNetwork={wrongNetwork}
            error={error}
            amount={inputAmount}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setInputAmount(event.target.value)
            }
            bridgeAddress={bridgeAddress}
            decimals={decimals}
            symbol={symbol}
            tokenAddress={tokenAddress}
            setShowSuccess={setShowSuccess}
            setDepositUrl={setDepositUrl}
            balance={balance}
            setAmount={setInputAmount}
          />
        </TabContentWrapper>
        <TabContentWrapper data-label="Remove">
          <RemoveLiquidityForm
            wrongNetwork={wrongNetwork}
            removeAmount={removeAmount}
            setRemoveAmount={setRemoveAmount}
            bridgeAddress={bridgeAddress}
            lpTokens={lpTokens}
            decimals={decimals}
            symbol={symbol}
            setShowSuccess={setShowSuccess}
            setDepositUrl={setDepositUrl}
            balance={balance}
            position={position}
            feesEarned={feesEarned}
            totalPosition={totalPosition}
          />
        </TabContentWrapper>
      </Tabs>
    </Wrapper>
  );
};

export default PoolForm;
