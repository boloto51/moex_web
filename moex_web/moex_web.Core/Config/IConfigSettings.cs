namespace moex_web.Core.Config
{
    public interface IConfigSettings
    {
        string ConnectionString { get; set; }
        ApplicationKeys ApplicationKeys { get; set; }
    }
}