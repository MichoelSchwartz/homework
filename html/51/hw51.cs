using System;
namespace SQL
{
	public class Shirt
	{
		public string Color { get; set; }
		public string Pattern { get; set; }
	}
	public class UsingShirt
	{
		string[] colors = new string[] { "red", "green", "blue" };
		string[] patterns = new string[] { "striped", "checked", "plain" };

		public UsingShirt()
		{
            for (int i = 0; i < colors.Length; i++)
            {
				for (int j = 0; j < patterns.Length; j++)
				{
					Shirt s = new Shirt();
					s.Color = colors[i];
					s.Pattern = patterns[j];
					Console.WriteLine($"{s.Color}:{s.Pattern}");
				}
            }
        }

		public static void Main(string[] args)
		{
			new UsingShirt();
		}
	}
}

