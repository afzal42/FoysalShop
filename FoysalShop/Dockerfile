FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY ["FoysalShop/FoysalShop.csproj", "FoysalShop/"]

RUN dotnet restore "FoysalShop/FoysalShop.csproj"
COPY . .
WORKDIR "/src/FoysalShop"
RUN dotnet build "FoysalShop.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "FoysalShop.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "FoysalShop.dll"]